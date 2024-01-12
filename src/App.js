import logo from './logo.svg';
import './App.css';
import Bootstrap from './bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const array = [{ value: "free", price: "0", users: "single user", subdomain: "free subdomain" },
  { value: "plus", price: "9", users: "5user", subdomain: "free subdomain" },
  { value: "pro", price: "49", users: "unlimited user", subdomain: "unlimited free subdomain" }];

  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {array.map((content) => {
            return (
           <Bootstrap main={content}></Bootstrap>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
