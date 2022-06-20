//data
import data from "../../public/data.json";
//dependencies
import React from "react";
//components
import Portal from "../Portal";
import Overlay from "../Overlay";
//styles
import styles from "../../styles/Viewer.module.css";

export default function Viewer({ index, onClose }) {
    const scrollmap = data.scrollmaps[index - 1];

    return (
        <Portal selector="#modalRoot">
            <Overlay title={scrollmap.name} onClose={onClose}>
                <div className={styles.content}>
                    <p>
                        Hold down the <span>SHIFT</span> key to scroll horizontally with a mouse.
                    </p>
                    <div className={styles.scroll}>
                        <img alt={scrollmap.alt} src={`/images/scrollmaps/${scrollmap.image}.jpg`} />
                    </div>
                </div>
            </Overlay>
        </Portal>
    );
}
