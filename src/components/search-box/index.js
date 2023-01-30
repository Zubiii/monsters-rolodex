const SearchBox = (props) => {
  const { onSearchChnageHandler, placeholder } = props
  return (
    <input
      className="monster-searchBox"
      type="search"
      placeholder={placeholder}
      onChange={onSearchChnageHandler}
    />
  )
}
export default SearchBox
