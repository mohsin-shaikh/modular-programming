import { Input } from 'antd';

const { Search } = Input;


const SearchInput = () => {
    const onSearch = value => console.log(value);

    return (
        <div className="search">
            <Search 
                placeholder="User Search" 
                allowClear 
                onSearch={onSearch} 
                style={{ width: "100%" }} 
            />
        </div>
    );
}

export default SearchInput;