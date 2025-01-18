export default function OrderForm({ camper }) {
  return (
    <div>
      <h3>Order Form</h3>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" />
        </label>
        <input type="hidden" name="carId" value={camper.id} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
