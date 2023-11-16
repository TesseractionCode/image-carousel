import { NavigateBefore, NavigateNext } from "@mui/icons-material"
import { useState } from "react"

import styles from './ImageCarousel.module.css'

export default function ImageCarousel(props: {displayed_images: {name: string, src: string}[]}): JSX.Element {
    let [imageIndex, setImageIndex] = useState(0)

    function handlePreviousButton() {
        if (imageIndex > 0)
        setImageIndex(imageIndex-1)
        else
        setImageIndex(props.displayed_images.length-1)
    }

    function handleNextButton() {
        if (imageIndex + 1 < props.displayed_images.length)
        setImageIndex(imageIndex+1)
        else
        setImageIndex(0)
    }

    return (
        <main className={styles.carousel_main}>
            <button className={styles.carousel_button} onClick={handlePreviousButton}><NavigateBefore fontSize='large'/></button>
            <div style={{display: 'inline-block'}} className={styles.carousel_item_display}>
                <h4>{props.displayed_images[imageIndex].name}</h4>
                <img src={props.displayed_images[imageIndex].src} className={styles.carousel_image}/>
            </div>
            <button className={styles.carousel_button} onClick={handleNextButton}><NavigateNext fontSize='large'/></button>
        </main>
    )
}