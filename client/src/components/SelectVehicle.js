const SelectVehicle = () => {
  return (
    <div id="Content_PageBody_RefineVehicleLinksUpdatePanel">
      <div id="Content_PageBody_VehicleSelector" class="selectVehicle">
        <div id="Content_PageBody_div_seoLinks" class="container">
          <div id="Content_PageBody_seoContainerDiv" class="seoContainer">
            <div
              id="Content_PageBody_seoTitle"
              class="seoTitle lead text-center"
            >
              <h2>Select a Make</h2>
            </div>
            <div
              id="Content_PageBody_RefineResultsDefaultContainer"
              class="row refineResults"
            >
              <a
                class="seoLinkItem Make"
                href="#top"
                title="Shop OEM Austin Healey Parts"
              >
                <img src="./files/austin-healey.png" alt="" />
                <div>Austin Healey</div>
              </a>

              <a
                class="seoLinkItem Make"
                href="#top"
                title="Shop OEM Jaguar Parts"
              >
                <img src="./files/jaguar.png" alt="" />
                <div>Jaguar</div>
              </a>

              <a class="seoLinkItem Make" href="#top" title="Shop OEM MG Parts">
                <img src="./files/mg.png" alt="" />
                <div>MG</div>
              </a>

              <a
                class="seoLinkItem Make"
                href="#top"
                title="Shop OEM Triumph Parts"
              >
                <img src="./files/triumph.png" alt="" />
                <div>Triumph</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectVehicle;
