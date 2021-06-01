import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ProductList from "../../Components/ProductList/ProductList";
import Search from "../../Components/SearchBox/Search";

const LandPage = () => {
    const [searchItem, setSearchItem] = useState("");

    return (
        <div>
            <main className="py-3">
                <Search setSearchItem={setSearchItem} />
                <Container>
                    <ProductList searchItem={searchItem} />
                </Container>
            </main>
        </div>
    );
};

export default LandPage;
