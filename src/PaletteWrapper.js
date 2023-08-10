import Palette from "./Palette";
import { generatePalette } from "./colorHelpers";
import seedColors from "./seedColors";
import { useParams } from "react-router-dom";

const findPalette = id => seedColors.find(palette => palette.id === id);

const PaletteWrapper = () => {
  const { id } = useParams();

  const palette = generatePalette(findPalette(id))

  return <Palette palette={palette} />;
};

export default PaletteWrapper;