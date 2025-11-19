import { Button, Image } from "react-bootstrap";

const AppBackground = ()=>{
    return(
        <div className="principalContainer">
            <Image className="image-icon" src=".\src\assets\icons\hat_chef.png"/>
            <h4 className="AppTitle">Healthy Food Habits</h4>
            <Image className="image-background" src=".\src\assets\icons\fruits.png"/>
        </div>
    );
}

export default AppBackground;