import { CodeIcon } from "@heroicons/react/solid";
import Button from "./Button";
import Overlay from "./Overlay";
import Portal from "./Portal";

export default function Contact({ show, onClose }) {
    return (
        <Portal selector="#modalRoot">
            <Overlay title="Updates" show={show} onClose={onClose}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta repellat animi voluptas est assumenda? Blanditiis, animi consequuntur.</p>
                <Button type="anchor" href="https://github.com/sebygreen/scrollmap" text="Source" icon={<CodeIcon />} />
            </Overlay>
        </Portal>
    );
}
