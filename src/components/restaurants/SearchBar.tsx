import Categories from './Categories';
import TextFiled from './TextFiled';

export default function SearchBar() {
  return (
    <div>
      <TextFiled placeholder="식당이름을 입력해주세요" />
      <Categories />
    </div>
  );
}
