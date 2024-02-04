import ControlNext from './summary/ControlNext';
import FilterSection from './filterSection/FilterSection';
import MenuTable from './menuTable/MenuTable';
import OrderingList from './summary/OrderingList';

export default function Order() {
  return (
    <form className="order">
      <FilterSection />

      <MenuTable />

      <OrderingList />
      <ControlNext />
    </form>
  );
}
