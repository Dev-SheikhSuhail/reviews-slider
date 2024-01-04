//Array of review objects, each containing information about a person.
const reviewsArr = [
  {
    id: 1,
    name: "Ummar Hamid",
    job: "Web Developer",
    profileImg: "https://picsum.photos/150/150",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus dignissimos ex blanditiis accusamus esse qui adipisci eum maxime facere, nobis accusantium doloribus at nam sequi ipsam expedita! Quidem, dignissimos cupiditate.",
  },
  {
    id: 2,
    name: "Aaqib Mushtaq",
    job: "Web Designer",
    profileImg: "https://picsum.photos/150/150",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aliquam iste voluptatum, aut temporibus repellendus amet nam, voluptatibus adipisci eum perferendis, minima facilis! Quae voluptate eligendi accusamus praesentium consequuntur quas.",
  },
  {
    id: 3,
    name: "Er Samin",
    job: "Full Stack Developer",
    profileImg: "https://picsum.photos/150/150",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nemo pariatur quo unde. Eligendi asperiores animi voluptas quidem distinctio magnam rerum officiis. Officia beatae temporibus exercitationem quam ipsa facere assumenda.",
  },
  {
    id: 4,
    name: "Abdullah",
    job: "Web Programmer",
    profileImg: "https://picsum.photos/150/150",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium non molestiae praesentium eveniet minus explicabo aut culpa repellat totam, architecto neque quo ipsa quia dolorum quod et excepturi magni dolor.",
  },
];

//Selecting HTML elements for manipulation.
const personImg = document.getElementById("person-img");
const author = document.getElementById("author-name");
const jobTitle = document.getElementById("job-title");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomReviewBtn = document.querySelector(".random-review-btn");

let currentIndex; //To keep track of the current item(review object) index.

/* Function to set a random index as the starting item.
   Generating a random index within the array length.*/
const setRandomItem = () => {
  currentIndex = Math.floor(Math.random() * reviewsArr.length);
};

/*
Event listener for when the DOM is fully loaded.
DOMContentLoaded - Event that triggers when the HTML document has been completely loaded and parsed.
*/
window.addEventListener("DOMContentLoaded", () => {
  setRandomItem();
  viewPerson();
});

//Function to display information about a person.
const viewPerson = () => {
  const item = reviewsArr[currentIndex];
  personImg.src = item.profileImg;
  author.innerText = item.name;
  jobTitle.innerText = item.job;
  info.innerText = item.text;
};

nextBtn.addEventListener("click", () => {
  currentIndex++;
  //Wrapping around to the first item if the index exceeds the array length
  if (currentIndex > reviewsArr.length - 1) {
    currentIndex = 0;
  }
  viewPerson(); //Displaying the updated person information.
});
//
prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = reviewsArr.length - 1; //Wraps around to the last item.
  }
  viewPerson(); //Displaying the updated person information.
});

randomReviewBtn.addEventListener("click", () => {
  setRandomItem();
  viewPerson();
});
