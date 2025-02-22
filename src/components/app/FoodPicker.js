import { useState } from 'react';
import styles from './FoodPicker.module.css';
import { ReactComponent as FoodPickerIcon } from '../../assets/food-picker.svg';
import allFoods, {
    allRandomCategories,
    allChosenCategories,
    korean,
    otherAsian,
    other,
    chinese,
    fastFood,
    friedChicken,
    hotPot,
    italian,
    koreanRegular,
    koreanBBQ,
    mediterranean,
    mexican,
    pho,
    pizza,
    ribs,
    seafood,
    steakhouse,
    subs,
    thai,
    wings
} from '../../data/FoodCategories';

const FoodPicker = () => {
    const [ chosenCategory, setChosenCategory ] = useState('');

// Random Categories
    const handleRandomCategorySubmit = () => {
        const randomCategorySelection = () => {
            let category = Math.floor(Math.random() * allRandomCategories.length);
            return allRandomCategories[category];
        }

        const selectedCategory = randomCategorySelection();

        switch (selectedCategory) {
            case 'Korean food':
                const randomKorean = () => {
                    let koreanCategory = Math.floor(Math.random() * korean.length);
                    return korean[koreanCategory];
                }
                alert("How about " + selectedCategory + ", such as " + randomKorean() + "!");
                break;
            case 'non-Korean Asian food':
                const randomOtherAsian = () => {
                    let otherAsianCategory = Math.floor(Math.random() * otherAsian.length);
                    return otherAsian[otherAsianCategory];
                }
                alert("How about " + selectedCategory + ", such as " + randomOtherAsian() + "!");
                break;
            case 'something other than Asian food':
                const randomOther = () => {
                    let otherCategory = Math.floor(Math.random() * other.length);
                    return other[otherCategory];
                }
                alert("How about " + selectedCategory + ", such as " + randomOther() + "!");
                break;
        }
    }

// Knows what they want
    const changeSelectHandler = (e) => {
        setChosenCategory(e.target.value);
    }

    const handleKnownCategorySubmit = () => {
        let selectedFoodItem = '';
        switch (chosenCategory) {
            case 'Chinese':
                selectedFoodItem = chinese[Math.floor(Math.random() * chinese.length)];
                break;
            case 'Fast Food':
                selectedFoodItem = fastFood[Math.floor(Math.random() * fastFood.length)];
                break;
            case 'Fried Chicken':
                selectedFoodItem = friedChicken[Math.floor(Math.random() * friedChicken.length)];
                break;
            case 'Hot Pot':
                selectedFoodItem = hotPot[Math.floor(Math.random() * hotPot.length)];
                break;
            case 'Italian':
                selectedFoodItem = italian[Math.floor(Math.random() * italian.length)];
                break;
            case 'Korean':
                selectedFoodItem = koreanRegular[Math.floor(Math.random() * koreanRegular.length)];
                break;
            case 'Korean BBQ':
                selectedFoodItem = koreanBBQ[Math.floor(Math.random() * koreanBBQ.length)];
                break;
            case 'Mediterranean':
                selectedFoodItem = mediterranean[Math.floor(Math.random() * mediterranean.length)];
                break;
            case 'Mexican':
                selectedFoodItem = mexican[Math.floor(Math.random() * mexican.length)];
                break;
            case 'Pho':
                selectedFoodItem = pho[Math.floor(Math.random() * pho.length)];
                break;
            case 'Pizza':
                selectedFoodItem = pizza[Math.floor(Math.random() * pizza.length)];
                break;
            case 'Ribs':
                selectedFoodItem = ribs[Math.floor(Math.random() * ribs.length)];
                break;
            case 'Seafood':
                selectedFoodItem = seafood[Math.floor(Math.random() * seafood.length)];
                break;
            case 'Steakhouse':
                selectedFoodItem = steakhouse[Math.floor(Math.random() * steakhouse.length)];
                break;
            case 'Subs':
                selectedFoodItem = subs[Math.floor(Math.random() * subs.length)];
                break;
            case 'Thai':
                selectedFoodItem = thai[Math.floor(Math.random() * thai.length)];
                break;
            case 'Wings':
                selectedFoodItem = wings[Math.floor(Math.random() * wings.length)];
                break;
            default:
                alert("Please select a valid category.");
                return;
        }
        alert("Since you want " + chosenCategory + ", how about " + selectedFoodItem + "?");
        setChosenCategory('');
    }

    return (
        <article className={styles.container}>
            <FoodPickerIcon className={styles.foodPickerIcon} alt="Food picker icon" />
            <h2 className={styles.sectionTitle}>Food Picker</h2>
            <p className={styles.sectionText}>Let's figure out what you should eat!</p>
            <div className={styles.randomCategory}>
                <h3 className={styles.optionsHeadings}>Hmm... I'm not really sure.</h3>
                <button type="submit" className={styles.btns} onClick={handleRandomCategorySubmit}>Choose for me!</button>
            </div>
            <hr />
            <div className={styles.chosenCategory}>
                <div className={styles.chosenContent}>
                    <h3 className={styles.optionsHeadings}>I'm feeling...</h3>
                    <select
                        className={styles.selectInput}
                        type="text"
                        name="categories"
                        onChange={changeSelectHandler}
                    >
                        <option value="Select a category">Select category</option>
                        {allChosenCategories.map((category) => (
                            <option key={category}>{category}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className={`${styles.btns} ${styles.last}`} onClick={handleKnownCategorySubmit}>Find a place!</button>
            </div>
        </article>
    )
}

export default FoodPicker;