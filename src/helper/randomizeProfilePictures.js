
import image1 from "../assets/profilePictures/pexels-cottonbro-studio-6626882.jpg"
import image2 from "../assets/profilePictures/pexels-dziana-hasanbekava-7275385.jpg"
import image3 from "../assets/profilePictures/pexels-mohamed-abdelghaffar-771742.jpg"
import image4 from "../assets/profilePictures/pexels-pixabay-415829.jpg"
import image5 from "../assets/profilePictures/pexels-rodnae-productions-7148620.jpg"
import image6 from "../assets/profilePictures/pexels-элен-пройс-8579787.jpg"

import ap1 from "../assets/apartments/house1.jpg"
import ap2 from "../assets/apartments/house2.jpg"
import ap3 from "../assets/apartments/Rectangle 215.png"
import ap4 from "../assets/apartments/Rectangle 217.png"
import ap5 from "../assets/apartments/Rectangle 219.png"


const images = [image1, image2, image3, image4, image5, image6]

const apartments = [ap1, ap2, ap3, ap4, ap5]

export function returnRandomImage() {
    return images[Math.floor(Math.random() * images.length)]
}

export function returnRandomApartment() {
    return apartments[Math.floor(Math.random() * apartments.length)]
}