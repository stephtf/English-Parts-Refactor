const VinContainer = () => {
  return (
    <div>
      <div id="VinControl_VinContainer" class="vin-container">
        <div class="vin-row row">
          <button
            id="VinControl_VinCloseModal"
            type="button"
            class="closeModal"
          >
            <span class="sr-only">Close VIN entry layer</span>
          </button>
          <div class="vin-col col-md-12">
            <div class="form-inline">
              <label class="center-block" for="vinEntry" tabindex="-1">
                Enter VIN
              </label>
              <div class="form-group">
                <label for="VinControl_vinEntry" class="sr-only">
                  Enter 17 digit VIN here
                </label>
                <input
                  name="VinControl$vinEntry"
                  type="text"
                  id="VinControl_vinEntry"
                  class="form-inline"
                  onkeydown="return (event.keyCode!=13);"
                  placeholder="Enter 17 digit VIN here"
                />
              </div>
              <button
                id="VinControl_vinSubmit"
                type="button"
                class="btn btn-sm btn-primary"
              >
                Go
              </button>
            </div>
            <div class="vinResults"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VinContainer;
