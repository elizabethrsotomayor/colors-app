import SingleColorPalette from "./SingleColorPalette";
import { generatePalette } from "./colorHelpers";
import seedColors from "./seedColors";
import { useParams } from "react-router-dom";

const findPalette = id => seedColors.find(palette => palette.id === id);

const SingleColorPaletteWrapper = () => {
  const { paletteId, colorId } = useParams();

  const palette = generatePalette(findPalette(paletteId))

  return <SingleColorPalette colorId={colorId} palette={palette}/>;
};

export default SingleColorPaletteWrapper;