// Existing imports
import Butter from '../../assets/butter.png';
import Strawberry from '../../assets/strawberry.png';
import Eggs from '../../assets/eggs.png';
import Cabbage from '../../assets/cabbage.png';
import Eggplant from '../../assets/eggplant.png';
import Kiwi from '../../assets/kiwi.png';
import Capsicum from '../../assets/capsicum.png';
import Broccoli from '../../assets/broccoli.png';
import Yogurt from '../../assets/yogurt.png';
import Kale from '../../assets/kale.png';
import Cheese from '../../assets/cheese.png';
import CondensedMilk from '../../assets/condensed-milk.png';
import Banana from '../../assets/banana.png';
import Milk from '../../assets/milk.png';
import Pineapple from '../../assets/pineapple.png';
import Tofu from '../../assets/tofu.png';
import SliceCheese from '../../assets/slice-cheese.png';
import RicottaCheese from '../../assets/ricotta-cheese.png';
import Grapes from '../../assets/grapes.png';
import Lettuce from '../../assets/lettuce.png';

// New imports for extra products
import Apple from '../../assets/apple.png';
import Mango from '../../assets/mango.png';
import Orange from '../../assets/orange.png';
import Watermelon from '../../assets/watermelon.png';
import Tomato from '../../assets/tomato.webp';
import Carrot from '../../assets/carrot.webp';
import Potato from '../../assets/potato.avif';
import Spinach from '../../assets/spinach.png';
import Paneer from '../../assets/paneer.webp';
import IceCream from '../../assets/icecreem.webp';
import Cream from '../../assets/cream.webp';
import Ghee from '../../assets/ghee.png';
import BrownEggs from '../../assets/brown-eggs.webp';
import BasmatiRice from '../../assets/basmati-rice.avif';
import WheatFlour from '../../assets/wheat-flour.png';
import Oats from '../../assets/oats.webp';
import Corn from '../../assets/corn.png';
import Almonds from '../../assets/almonds.png';
import Cashews from '../../assets/cashews.png';
import Raisins from '../../assets/raisins.webp';
import Dates from '../../assets/dates.webp';
import Walnuts from '../../assets/walnuts.webp';

// Final Products Array
const products = [
    { id: 1, name: 'Strawberry', price: 3.0, category: 'Fruits', image: Strawberry, isFavorite: false },
    { id: 2, name: 'Cabbage', price: 3.0, category: 'Vegetables', image: Cabbage, isFavorite: false },
    { id: 3, name: 'Butter', price: 3.5, category: 'Dairy', image: Butter, isFavorite: false },
    { id: 4, name: 'Eggs', price: 2.05, category: 'Eggs', image: Eggs, isFavorite: false },
    { id: 5, name: 'Basmati Rice', price: 6.0, category: 'Grains', image: BasmatiRice, isFavorite: false },
    { id: 6, name: 'Almonds', price: 10.0, category: 'Dry Fruits', image: Almonds, isFavorite: false },
    { id: 7, name: 'Kiwi', price: 2.05, category: 'Fruits', image: Kiwi, isFavorite: false },
    { id: 8, name: 'Paneer', price: 5.0, category: 'Dairy', image: Paneer, isFavorite: false },
    { id: 9, name: 'Banana', price: 2.0, category: 'Fruits', image: Banana, isFavorite: false },
    { id: 10, name: 'Pineapple', price: 5.0, category: 'Fruits', image: Pineapple, isFavorite: false },
    { id: 11, name: 'Grapes', price: 3.0, category: 'Fruits', image: Grapes, isFavorite: false },
    { id: 12, name: 'Apple', price: 4.0, category: 'Fruits', image: Apple, isFavorite: false },
    { id: 13, name: 'Mango', price: 5.0, category: 'Fruits', image: Mango, isFavorite: false },
    { id: 14, name: 'Orange', price: 3.5, category: 'Fruits', image: Orange, isFavorite: false },
    { id: 15, name: 'Watermelon', price: 6.0, category: 'Fruits', image: Watermelon, isFavorite: false },
    { id: 16, name: 'Eggplant', price: 4.0, category: 'Vegetables', image: Eggplant, isFavorite: false },
    { id: 17, name: 'Green Capsicum', price: 4.0, category: 'Vegetables', image: Capsicum, isFavorite: false },
    { id: 18, name: 'Broccoli', price: 2.0, category: 'Vegetables', image: Broccoli, isFavorite: false },
    { id: 19, name: 'Kale Leaves', price: 3.0, category: 'Vegetables', image: Kale, isFavorite: false },
    { id: 20, name: 'Lettuce Leaf', price: 3.0, category: 'Vegetables', image: Lettuce, isFavorite: false },
    { id: 21, name: 'Tomato', price: 2.0, category: 'Vegetables', image: Tomato, isFavorite: false },
    { id: 22, name: 'Carrot', price: 2.5, category: 'Vegetables', image: Carrot, isFavorite: false },
    { id: 23, name: 'Potato', price: 1.5, category: 'Vegetables', image: Potato, isFavorite: false },
    { id: 24, name: 'Spinach', price: 2.0, category: 'Vegetables', image: Spinach, isFavorite: false },
    { id: 25, name: 'Yogurt', price: 3.0, category: 'Dairy', image: Yogurt, isFavorite: false },
    { id: 26, name: 'Mozzarella Cheese', price: 7.0, category: 'Dairy', image: Cheese, isFavorite: false },
    { id: 27, name: 'Condensed Milk', price: 5.0, category: 'Dairy', image: CondensedMilk, isFavorite: false },
    { id: 28, name: 'Milk Bottle (3)', price: 8.0, category: 'Dairy', image: Milk, isFavorite: false },
    { id: 29, name: 'Tofu Cubes', price: 4.0, category: 'Dairy', image: Tofu, isFavorite: false },
    { id: 30, name: 'Slice Cheese', price: 5.0, category: 'Dairy', image: SliceCheese, isFavorite: false },
    { id: 31, name: 'Ricotta Cheese', price: 7.0, category: 'Dairy', image: RicottaCheese, isFavorite: false },
    { id: 32, name: 'Paneer', price: 5.0, category: 'Dairy', image: Paneer, isFavorite: false },
    { id: 33, name: 'Ice Cream', price: 6.0, category: 'Dairy', image: IceCream, isFavorite: false },
    { id: 34, name: 'Cream', price: 4.5, category: 'Dairy', image: Cream, isFavorite: false },
    { id: 35, name: 'Ghee', price: 8.0, category: 'Dairy', image: Ghee, isFavorite: false },
    { id: 36, name: 'Brown Eggs', price: 2.5, category: 'Eggs', image: BrownEggs, isFavorite: false },
    { id: 38, name: 'Wheat Flour', price: 3.0, category: 'Grains', image: WheatFlour, isFavorite: false },
    { id: 39, name: 'Oats', price: 4.0, category: 'Grains', image: Oats, isFavorite: false },
    { id: 40, name: 'Corn', price: 2.0, category: 'Grains', image: Corn, isFavorite: false },
    { id: 42, name: 'Cashews', price: 12.0, category: 'Dry Fruits', image: Cashews, isFavorite: false },
    { id: 43, name: 'Raisins', price: 8.0, category: 'Dry Fruits', image: Raisins, isFavorite: false },
    { id: 44, name: 'Dates', price: 7.0, category: 'Dry Fruits', image: Dates, isFavorite: false },
    { id: 45, name: 'Walnuts', price: 15.0, category: 'Dry Fruits', image: Walnuts, isFavorite: false },
];

export default products;
