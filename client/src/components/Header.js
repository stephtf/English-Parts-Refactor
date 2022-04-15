
const Header = () => {
    return(
        <div>
            {/* <a href="#" tabindex="0" class="skip" target="_self">Skip to Content</a> */}
            
            <div className="h1TextHeader">
                <div className="container">
                    <div className="row navbar-row">
                        <div className="col-sm-11 small single-text-line-small h1Text">
                            <h1 className="body-2 text-muted">
                                Browse our complete catalog of OEM and licensed British heritage parts for your classic British automobile. | Kalamazoo, MI</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div id="ContentPlaceHolderContainer" className="content en">
            </div>
       

        <div className="header-navigation sp-nav dealer" id="HeaderNavigationContainer">
            <div className="navbar navbar-default header-nav-default">
            <nav className="navbar navbar-default headerNav">
                <div className="container">
        
        <div className="collapse navbar-collapse" id="nav-links"></div>
       
            <div className="navbar-header header-logo">
                <a className="navbar-brand business-logo" href="#">
                    <img alt="logo" src="logo.png"/></a>
            </div>
            <div className="navbar-text business-information">
                <div className="business-information__name heading-2" href="/">EnglishParts.com</div>
                <div className="business-contact-details">
                    <div className="contact-detail business-contact-details__location">5850 Stadium Dr, Kalamazoo, MI 49009</div>
                    <div className="contact-detail business-contact-details__phone">866.467.1776</div>
                    <div className="contact-detail business-contact-details__email"><a tabindex="0" className="small" href="#">sales@englishparts.com</a></div>
                </div>
            </div>
            <button type="button" class="navbar-toggle collapsed header-mobile-toggle" data-toggle="collapse" aria-expanded="false" id="MobileNavToggle">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <ul class="nav navbar-nav navbar-right navigation-link-group" id="HeaderNavigationLinks">
                 
                <li id="PartsDropdown" class="dropdown navigation-list-item"><a href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle navigation-link category-links-button">Parts</a> <ul class="dropdown-menu navlink-dropdown-menu"> </ul></li>
               
               <li><a href="#" class="about-us-link navigation-links heading-4">About Us</a></li>
               
            </ul>
        </div>
      </nav>
      </div>
</div>
    </div>
    )
}

export default Header; 