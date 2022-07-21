import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChanged = ({target}) => {
        setInputValue(target.value);
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;

        // setCategories( cat => [inputValue, ...cat]);
        onNewCategory(inputValue.trim())
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChanged}
            />
        </form>
    )
}
