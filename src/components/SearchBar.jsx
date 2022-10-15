import {IconButton, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


const SearchBar = ({setSearchQuery}) => (
    <form>
        <TextField
            id="search-bar"
            className="text"
            onInput={(e) => {
                setSearchQuery(e.target.value);
            }}
            label="Search"
            variant="outlined"
            placeholder="Search..."
            size="small"
            sx={{
                borderColor: 'text.primary',
                color: 'text.primary',
                bg: 'lightgray',
                fontFamily: 'body'
            }}
        />
        <IconButton type="submit" aria-label="search">
            <SearchIcon />
        </IconButton>
    </form>
);

export default SearchBar;