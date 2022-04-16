const Search = () => {
  return (
    <div>
      <div className="utility-bar cf" id="UtilityBar">
        <div className="utility-bar-top">
          <div className="container utility-bar-container">
            <div
              className="utility-bar__section utility-bar__search"
              id="SmartSearch"
              role="search"
              aria-labelledby="header-search"
            >
              <div
                id="utilitySmartSearch"
                className="input-group utility-bar__element"
              >
                <span className="input-group-addon utility-bar__search-icon icon-magnifier"></span>
                <label for="SearchInput" className="sr-only">
                  Search
                </label>
                <input
                  id="SearchInput"
                  type="text"
                  title="Click here to search"
                  className="form-control utility-bar__search-input"
                  placeholder="Search by Keywords, Part Numbers or VIN"
                  autocomplete="off"
                ></input>
                <span className="input-group-btn" title="Search Button">
                  <button
                    type="button"
                    className="btn btn-default utility-bar__search-button"
                    id="searchBtn"
                  >
                    Go{" "}
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div
            id="MyGarage"
            className="utility-bar__section utility-bar__select-vehicle"
          >
            <div id="selectVehicle" className="utility-bar__element">
              <div
                id="selectVehicleText"
                title="My Garage"
                className="utility-bar__select-vehicle-text"
              ></div>
              Select Your Vehicle
            </div>{" "}
            <button
              type="button"
              id="UtilityBarToggleButton"
              title="Select Vehicle Button"
              aria-label="Select Vehicle Button"
              className="utility-bar__select-vehicle-button"
            >
              <span className="icon-arrow-down select-vehicle-icon"></span>
            </button>
          </div>
          {/* <div className="boxTriangle" style="display: none;"> */}
          <span className="top-bot my-garage-top"></span>
          {/* <div className="garage__container" style="display: none;"> */}
          <div id="garageContainer" className="garage garage-vehicles">
            <div className="garage__header">
              My Garage
              <button
                type="button"
                aria-label="close"
                className="close my-garage__close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>{" "}
            <div className="garage__content no-garage-content">
              {/* <div className="garage__selection" style="display: none;"> */}
              <span aria-hidden="true" className="icon-partman"></span>{" "}
              <div className="garage__help">
                You can edit the name of your vehicle by clicking the pencil
                icon on the right.
              </div>{" "}
              <div className="garage-vehicles"></div>{" "}
              <div className="garage__additions no-vehicles">
                <div className="vehicle-selection-addition">
                  <button type="button" className="garage__select-vehicle">
                    + Add New Vehicle
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>{" "}
      </div>

      <div className="utility-bar__section" id="CartWidgetUtility" title="Cart">
        <button
          type="button"
          id="CartWidgetHeaderButton"
          className="utility-bar__section utility-bar__element utility-bar__cart cart-widget-button"
        >
          <span className="cart-widget-button__icon icon-basket"></span>{" "}
          <span
            id="NumCartItems"
            aria-label="0 in Cart. Click to view Cart"
            className="cart-widget-button__number badge-normal"
          >
            0
          </span>
        </button>
      </div>
    </div>
  );
};

export default Search;
