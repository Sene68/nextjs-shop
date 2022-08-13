import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
    return (
        <div>
            <div style={{ display: "flex", paddingTop: 20 }}>
                <div style={{ flex: "100px 0 0"}}>
                    <img src="/images/sene.jpg" alt="logo" style={{ display: "block", width: 80 }}/>
                </div>
                <Header as="h1">NextJS Shop</Header>
            </div>
            <Gnb />
        </div>
    );
}