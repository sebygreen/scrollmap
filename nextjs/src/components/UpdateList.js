import PocketBase from "pocketbase";

import Update from "./Update";

async function getUpdates() {
    const pb = new PocketBase("http://pocketbase:8090");
    try {
        const records = await pb
            .collection("updates")
            .getFullList({ sort: "-timestamp" });
        return records;
    } catch (e) {
        throw new Error(e);
    }
}

export default async function UpdateList() {
    const updates = await getUpdates();
    return (
        <div>
            {updates.map((update) => (
                <Update
                    key={update.id}
                    timestamp={update.timestamp}
                    version={update.version}
                    description={update.description}
                    changelog={update.changelog}
                />
            ))}
        </div>
    );
}
