.box_form {
    position: relative;
    display: block;
    padding: 15px;
    margin: auto;
    max-width: 480px;
    background: #ffffff;
    overflow: hidden;
    border-radius: 15px;
    border: 1px solid transparent;
    box-shadow: 0px 8px 16px 0 rgb(0 0 0 / 10%);
}

.box_container {
    position: relative;
    display: grid;
    padding: 0px;
    margin: 0;
    height: 100%;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(45deg, #009FFF, #0051FF);
}

.box_container::-webkit-scrollbar {
    width: 3px;
}

/* Track */
.box_container::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.35);
    cursor: pointer;
    border-radius: 0px;
    border: none;
}

/* Handle */
.box_container::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    border-radius: 10px;
    transition: ease-in-out 0.2s;
}

.box_form .box_tab {
    padding: 12px 45px;
    text-transform: capitalize;
    font-family: 'Poppins-Bold';
    font-size: 16px;
    color: black;
}

.p, p {
    padding: 15px;
    font-size: 16px;
    font-family: Poppins-Light !important;
}

h2 {
    font-size: 26px;
    text-transform: capitalize;
    font-family: Poppins-regular;
}

.errortxt {
    font-size: 16px !important;
    margin: auto 15px !important;
    width: calc(100% - 60px) !important;
    text-transform: capitalize !important;
    font-family: Poppins-Light !important;
}

a {
    color: #073fb8 !important;
}
