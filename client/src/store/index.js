import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#82CAFA',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './balloon.png',
    fullDecal: './balloon.png',
});

export default state;