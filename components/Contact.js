import Overlay from "./Overlay";
import Portal from "./Portal";

export default function Contact({ show, onClose }) {
    return (
        <Portal selector="#modalRoot">
            <Overlay title="Contact" show={show} onClose={onClose}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit voluptatum voluptatem laborum. Maxime enim fugiat omnis ipsum repudiandae dolorum, eius ex ut quibusdam deleniti eveniet quae laudantium saepe voluptatem.</p>
            </Overlay>
        </Portal>
    );
}
