import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FaHeart } from "react-icons/fa";
import DatePicker from "react-datepicker";
import Select from "react-select";
import Slider from "rc-slider";
import "react-datepicker/dist/react-datepicker.css";
import "rc-slider/assets/index.css";
import { useNavigate } from "react-router-dom";
import { useFavorite } from "./FavoriteContext";
import data from "./properties.json";
import "./Properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState(null);
  const [minRooms, setMinRooms] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [searchDate, setSearchDate] = useState(null);
  const [searchPostalCode, setSearchPostalCode] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);
  const { dispatch, state } = useFavorite();

  const navigate = useNavigate();

  useEffect(() => {
    setProperties(data.properties);
  }, []);

  const monthToIndex = (month) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months.indexOf(month);
  };

  const filteredProperties = (showFavorites ? state.favorites : properties).filter(
    (property) => {
      const matchesSearchTerm = property.location
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesPropertyType =
        !propertyType || property.type.toLowerCase() === propertyType.toLowerCase();
      const matchesMinRooms = !minRooms || property.bedrooms >= minRooms;
      const matchesPrice =
        property.price >= priceRange[0] && property.price <= priceRange[1];
      const matchesPostalCode = searchPostalCode
        ? property.postalCode
            .toLowerCase()
            .includes(searchPostalCode.toLowerCase())
        : true;
      const matchesDate =
        !searchDate ||
        (property.added &&
          new Date(
            property.added.year,
            monthToIndex(property.added.month),
            property.added.day
          ).getTime() === searchDate.getTime());

      return (
        matchesSearchTerm &&
        matchesPropertyType &&
        matchesMinRooms &&
        matchesPrice &&
        matchesPostalCode &&
        matchesDate
      );
    }
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  function showAll() {
    setSearchTerm("");
    setPropertyType(null);
    setMinRooms(null);
    setPriceRange([0, 1000000]);
    setSearchDate(null);
    setSearchPostalCode("");
    setShowFavorites(false);
  }

  const handleFavorites = (item) => {
    const isItemInFavorites = state.favorites.some((i) => i.id === item.id);
    !isItemInFavorites ? addToFavorites(item) : removeFromFavorites(item);
  };

  const addToFavorites = (item) => {
    dispatch({ type: "ADD_TO_FAVORITES", payload: item });
  };

  const removeFromFavorites = (item) => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: item });
  };

  const clearFavorites = () => {
    dispatch({ type: "CLEAR_FAVORITES" });
    setShowFavorites(false);
  };

  const handleSearchPostalCodeChange = (e) => {
    setSearchPostalCode(e.target.value);
  };

  const handleMoreClick = (propertyId) => {
    navigate(`/Properties/${propertyId}`, { state: { id: propertyId } });
  };

  const propertyTypeOptions = [
    { value: "House", label: "House" },
    { value: "Flat", label: "Flat" },
    { value: "Apartment", label: "Apartment" },
    { value: "Maisonette", label: "Maisonette" },
    { value: "Townhouse", label: "Townhouse" },
  ];

  const roomOptions = [
    { value: 1, label: "1 Room" },
    { value: 2, label: "2 Rooms" },
    { value: 3, label: "3 Rooms" },
    { value: 4, label: "4 Rooms" },
    { value: 5, label: "5+ Rooms" },
  ];

  return (
    <div>
      <div className="propertiescontainer">
        <div className="section-title mt-5 d-lg-flex align-items-center">
          <div className="text-container mt-3 pt-3 ms-4 ps-4">
            <h2 style={{ fontSize: "2em", margin: "0", textAlign: "center" }}>
              Find property for sale
            </h2>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 10 }}>
        <Container fluid>
          <Row className="justify-content-center">
            <div className="col-md-6 col-sm-12">
              <form>
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search by location"
                  />
                </div>
              </form>
            </div>
          </Row>
          <Row className="justify-content-center">
            <div className="col-md-6 col-sm-12">
              <div className="d-flex justify-content-center align-items-center mt-3">
                <span className="me-2">Property Type</span>
                <Select
                  options={propertyTypeOptions}
                  onChange={(selectedOption) =>
                    setPropertyType(selectedOption ? selectedOption.value : null)
                  }
                  value={
                    propertyType
                      ? propertyTypeOptions.find(
                          (option) => option.value === propertyType
                        )
                      : null
                  }
                  placeholder="Select Property Type"
                  isClearable
                  className="me-2"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center mt-3">
                <span className="me-2">Price Range</span>
                <Slider
                  range
                  min={0}
                  max={1000000}
                  step={10000}
                  value={priceRange}
                  onChange={(value) => setPriceRange(value)}
                  className="me-2"
                />
                <span className="ms-2">
                  ${priceRange[0]} - ${priceRange[1]}
                </span>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-3">
                <span className="me-2">Min Rooms</span>
                <Select
                  options={roomOptions}
                  onChange={(selectedOption) =>
                    setMinRooms(selectedOption ? selectedOption.value : null)
                  }
                  value={
                    minRooms
                      ? roomOptions.find((option) => option.value === minRooms)
                      : null
                  }
                  placeholder="Select Min Rooms"
                  isClearable
                  className="me-2"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center mt-3">
                <span className="me-2">Search by Date</span>
                <DatePicker
                  selected={searchDate}
                  onChange={(date) => setSearchDate(date)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select Date"
                  className="form-control me-2"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center mt-3">
                <span className="me-2">Postal Code</span>
                <input
                  type="text"
                  className="form-control"
                  value={searchPostalCode}
                  onChange={handleSearchPostalCodeChange}
                  placeholder="Search by postal code"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center mt-3">
                <Button
                  onClick={() => setShowFavorites(true)}
                  className="btn btn-primary me-2"
                >
                  Show Favorites
                </Button>
                <Button
                  onClick={clearFavorites}
                  className="btn btn-warning me-2"
                >
                  Clear All Favorites
                </Button>
                <Button onClick={showAll} variant="success text-white">
                  Reset Filters
                </Button>
              </div>
            </div>
          </Row>
          <Row className="justify-content-center mt-4">
            {filteredProperties.map((property) => (
              <Card
                key={property.id}
                className="card col-md-2 col-sm-10 m-4 p-0"
              >
                <Card.Img
                  variant="top"
                  src={property.pictures[0]}
                  alt="Card image"
                  style={{ height: "300px", width: "300px" }}
                />
                <Card.Title className="text-black p-2">
                  {property.location}
                </Card.Title>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Type: {property.type}</li>
                  <li className="list-group-item">
                    Bedrooms: {property.bedrooms}
                  </li>
                  <li className="list-group-item">Tenure: {property.tenure}</li>
                  <li className="list-group-item">Price: ${property.price}</li>
                  <li className="list-group-item">
                    Date Added: {property.added.month} {property.added.day},{" "}
                    {property.added.year}
                  </li>
                  <li className="list-group-item">
                    Postal Code: {property.postalCode}
                  </li>
                </ul>
                <Card.Text className="p-2">
                  {property.description.substring(0, 200) + "..."}
                </Card.Text>
                <div className="d-flex justify-content-center align-items-center p-2">
                  <Button
                    onClick={() => handleMoreClick(property.id)}
                    className="btn btn-danger me-1"
                  >
                    More
                  </Button>
                  <Button
                    onClick={() => handleFavorites(property)}
                    className={`favorites-btn ${
                      state.favorites.some((i) => i.id === property.id)
                        ? "active"
                        : ""
                    }`}
                  >
                    <FaHeart
                      style={{
                        fontSize: "20px",
                        color: state.favorites.some(
                          (i) => i.id === property.id
                        )
                          ? "red"
                          : "white",
                      }}
                    />
                  </Button>
                </div>
              </Card>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Properties;
