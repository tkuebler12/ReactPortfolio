import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="navbar-collapse row">
                <Navbar />
            </div>
        </nav>
    )
}

export default Navbar;