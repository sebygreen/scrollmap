"use client";
//dependencies
import Image from "next/image";
import { motion } from "framer-motion";
//components
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import Button from "../components/Button";
//styles
import styles from "../styles/Home.module.css";

export default function Page() {
    const explorer = {
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: {
            opacity: 0,
            x: "-10px",
            transition: {
                duration: 0.2,
                type: "linear",
                damping: 0,
                stiffness: 0,
            },
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.2,
                type: "linear",
                damping: 0,
                stiffness: 0,
            },
        },
    };
    return (
        <motion.section initial="hidden" animate="visible" variants={explorer} className={styles.explorer}>
            <motion.div variants={item} className={styles.item}>
                <div>
                    <h3>Scrollmap&apos;s</h3>
                    <p className={styles.description}>Scrollmap&apos;s are a unique blend of map illustration and a time tested format: scrolls.</p>
                    <Button type="link" href="/scrollmaps" text="Explore" icon={<ArrowSmallRightIcon />} />
                </div>
                <Image alt="Location arrow rendered in 3D" src="/assets/3dicons.co/location.png" width={130} height={130} quality={70} />
            </motion.div>
            <motion.div variants={item} className={styles.item}>
                <div>
                    <h3>Cards</h3>
                    <p className={styles.description}>Many of Stephen&apos;s works were digitized in card format. This is a showcase of them.</p>
                    <Button type="link" href="/cards" text="Explore" icon={<ArrowSmallRightIcon />} />
                </div>
                <Image alt="Picture rendered in 3D" src="/assets/3dicons.co/picture.png" width={130} height={130} quality={70} />
            </motion.div>
            <motion.div variants={item} className={styles.item}>
                <div>
                    <h3>Illustrations</h3>
                    <p className={styles.description}>Many works here are not part of a particular series or are in too broad of a category.</p>
                    <Button type="link" href="/illustrations" text="Explore" icon={<ArrowSmallRightIcon />} />
                </div>
                <Image alt="Paint kit rendered in 3D" src="/assets/3dicons.co/paint-kit.png" width={130} height={130} quality={70} />
            </motion.div>
            <motion.div variants={item} className={styles.item}>
                <div>
                    <h3>Extra</h3>
                    <p className={styles.description}>Stephen&apos;s music, photos and other miscellaneous projects are stored on this page.</p>
                    <Button type="link" href="/extra" text="Explore" icon={<ArrowSmallRightIcon />} />
                </div>
                <Image alt="Folder rendered in 3D" src="/assets/3dicons.co/folder.png" width={130} height={130} quality={70} />
            </motion.div>
        </motion.section>
    );
}
