import logo from './logo.svg';
import './App.css';
import './tailwind.css'
function App() {
  return (
    <div className="App">
      <div class="w-32 h-32 pl-8 pr-4 pt-8 pb-8 m-4 border-[.8px] rounded-2xl">hey</div>
      <div class="w-16 bg-homework-green text-homework-red text-center mb-3 ml-3">text</div>
      <div class="ml-3">
        <button class="bg-sky-500 hover:bg-sky-700 rounded-2xl text-white p-2 mb-3">
          Save changes
        </button>
      </div>
      <div class='ml-3'>
        <button class="bg-purple hover:bg-gray rounded-lg p-2 focus:outline-none focus:ring-4 focus:ring-orange mb-3">
          Button
        </button>
      </div>
      <div class='flex flex-col items-center'>
        <button class="bg-gray-light sm:bg-orange md:bg-yellow lg:bg-green xl:bg-blue 2xl:bg-purple p-2 align-middle">
          Button
        </button>
      </div>
    </div>

  );
}

export default App;
