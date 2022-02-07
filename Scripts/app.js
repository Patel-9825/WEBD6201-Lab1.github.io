// Name: Dhruv Patel
// Student ID: 100800111
// Date Completed: 6th February, 2022
// Reference:
//          https://www.codegrepper.com/code-examples/javascript/javascript+to+redirect+to+another+page+after+5+seconds (for setting 3 sec timeout)


// IIFE - Immediately Invoked Function Expression
// AKA Anonymous Self-Executing Function
(function()
{
    // Navigation bar for footer to display CopyRight sign and year at the bottom of the page.
    let DocumentBody = document.body;
    let Footer = document.createElement("footer");
    let FooterNavBar = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
    <a class="navbar-brand"><i class="far fa-copyright"></i>CopyRight 2022 </a> 
    </div>
    </nav>`;
    Footer.innerHTML = FooterNavBar;
    DocumentBody.appendChild(Footer);



    /**
     * 
     * This function is used to add or edit the existing things in the About Us Page.
     */
    function DisplayAboutPage()
    {
        console.log("About Us Page");

        let AboutContent = document.getElementsByTagName("main")[0];
        
        let About1Paragraph = document.createElement("p");
        let About2Paragraph = document.createElement("p");
        let About3Paragraph = document.createElement("p");

        About1Paragraph.setAttribute("id", "AboutParagraph");
        About1Paragraph.setAttribute("class", "mt-3");
        About1Paragraph.textContent = "Myself Dhruv Patel and I am very much fond of doing programming whenever i get time.";

        About2Paragraph.setAttribute("id", "About2Paragraph");
        About2Paragraph.setAttribute("class", "mt-3");
        About2Paragraph.textContent = "I am so much imagination when it comes to making project and I try to implement everything into the project and that's how i am known.";

        About3Paragraph.setAttribute("id", "About3Paragraph");
        About3Paragraph.setAttribute("class", "mt-3");
        About3Paragraph.textContent = "PS: For the lab, it is supposed to work in group but i was unfortunate to have a partner so i decided to work on my own and TBH I liked the way i work at my own. I think it's enough to talk about my own good will. Sorry for that. (Reload the site again if the image doesn't appear.)";

        AboutContent.appendChild(About1Paragraph);
        AboutContent.appendChild(About2Paragraph);
        AboutContent.appendChild(About3Paragraph);

        document.getElementById("ProductsLink").innerHTML = "Projects";

        
    }

    /**
     *
     * This function is used to add or edit the existing things in the Products Page.
     */
    function DisplayProductsPage()
    {
        console.log("Products Page");

        //step 1 get a reference to an entry point(s)
        let Products1Content = document.getElementsByTagName("main")[0];

        let Products2Content = document.getElementsByTagName("main")[1];

        let Products3Content = document.getElementsByTagName("main")[2];
       

        //step 2 create an element
        let Products1Paragraph = document.createElement("p");
        let Products2Paragraph = document.createElement("p");
        let Products3Paragraph = document.createElement("p");
        // let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>`;
        

        //step 3 configure new element
        Products1Paragraph.setAttribute("id", "Products1Paragraph");
        Products1Paragraph.setAttribute("class", "mt-3");
        Products1Paragraph.textContent = "Test automation was the first big project which i worked on using Selenium IDE and I have tested the whole website alongside my Group Members.";
        
        
        Products2Paragraph.setAttribute("id", "Products2Paragraph");
        Products2Paragraph.setAttribute("class", "mt-3");
        Products2Paragraph.textContent = "Developing a system information for the company which was handling the day-care and providing the good database system for them to track their data. So, this was the second project which I worked when i was in 3rd Semester.";


        Products3Paragraph.setAttribute("id", "Products3Paragraph");
        Products3Paragraph.setAttribute("class", "mt-3");
        Products3Paragraph.textContent = "Developing a system information for the company which was handling the day-care and providing the good database system for them to track their data. So, this was the second project which I worked when i was in 3rd Semester.";
        

        //step 4 add/insert new element
        Products1Content.appendChild(Products1Paragraph);
        Products2Content.appendChild(Products2Paragraph);
        Products3Content.appendChild(Products3Paragraph);



        document.getElementById("ProductsLink").innerHTML = "Projects";

       
       
    }

    /**
     *
     * This function is used to add or edit the existing things in the Services Page.
     */
    function DisplayServicesPage()
    {
        console.log("Services Page");

        //step 1 get a reference to an entry point(s)
        let Services1Content = document.getElementsByTagName("main")[0];

        let Services2Content = document.getElementsByTagName("main")[1];

        let Services3Content = document.getElementsByTagName("main")[2];

       

        //step 2 create an element
        let Services1Paragraph = document.createElement("p");
        let Services2Paragraph = document.createElement("p");
        let Services3Paragraph = document.createElement("p");
        // let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>`;
        

        //step 3 configure new element
        Services1Paragraph.setAttribute("id", "Services1Paragraph");
        Services1Paragraph.setAttribute("class", "mt-3");
        Services1Paragraph.textContent = "I have developed several skills over the years but according to me, the most developed and brushed skill for me is having grip on coding for web-designing.";
        
        
        Services2Paragraph.setAttribute("id", "Services2Paragraph");
        Services2Paragraph.setAttribute("class", "mt-3");
        Services2Paragraph.textContent = "Managing your time and allocating time to particular stuff which is necessary is very important to learn and I have developed at my own very well.";


        Services3Paragraph.setAttribute("id", "Services3Paragraph");
        Services3Paragraph.setAttribute("class", "mt-3");
        Services3Paragraph.textContent = "I have worked on several projects with random people in a group and always I used to lead them with my imaginary mind and try to guide them throughout the project. So, this is also the best skill which i developed.";
        

        //step 4 add/insert new element
        Services1Content.appendChild(Services1Paragraph);
        Services2Content.appendChild(Services2Paragraph);
        Services3Content.appendChild(Services3Paragraph);

        document.getElementById("ProductsLink").innerHTML = "Projects";

        
    }

    /**
     *
     * This function is used to add or edit the existing things in the Home Page.
     */
    function DisplayHomePage()
    {

        console.log("Home Page");

        
        
        //step 1 get a reference to an entry point(s)
        let MainContent = document.getElementsByTagName("main")[0];
        let MainContent2 = document.getElementsByTagName("main")[0];

        //step 2 create an element
        let MainParagraph = document.createElement("p");
        let MainParagraph2 = document.createElement("p");
        // let Article = document.createElement("article");
        // let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>`;

        //step 3 configure new element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "Hi Everyone, I am Dhruv Patel and I am currently enrolled into Computer Programming Analysis course for 3 years in Durham College.";
        MainParagraph2.setAttribute("id", "MainParagraph2");
        MainParagraph2.setAttribute("class", "mt-3");
        MainParagraph2.textContent = "I am working on several languages in various courses as I progress into the Program. This website is under construction so there isn't too much to display but i will make sure to show as the lab progress.";
        // Article.setAttribute("class", "container");

        //step 4 add/insert new element
        MainContent.appendChild(MainParagraph);
        MainContent2.appendChild(MainParagraph2);
        // Article.innerHTML = ArticleParagraph;
        // DocumentBody.appendChild(Article);

        // Deletion example
        // document.getElementById("ArticleParagraph").remove();

        // let NewH1 = document.createElement("h1");
        // NewH1.setAttribute("class", "display-1");

        // MainContent.before(NewH1);

        // NewH1.textContent = "Hello, World!";

        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            // redirect to about page
            location.href = "about.html";
        });

        document.getElementById("ProductsLink").innerHTML = "Projects";

    }

    /**
     *
     * This function is used to add or edit the existing things in the Contact Page.
     */
    function DisplayContactPage()
    {
        console.log("Contact Us Page");

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckBox = document.getElementById("subscribeCheckBox");

        // localStorage.setItem("1", "Dhruv");
        // console.log(localStorage.getItem("1"));
        // localStorage.removeItem("1");
        // console.log(localStorage.length);

        sendButton.addEventListener("click", function(event)
        {
            event.preventDefault(); // for Debugging
            if(subscribeCheckBox.checked)
            {
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                console.log(contact.toString());
                // if(contact.serialize())
                // {
                //     let key = contact.FullName.substring(0, 1) + Date.now();

                //     localStorage.setItem(key, contact.serialize());
                // }
            }

            setTimeout(function()
            {
                location.href = "index.html";
            }, 3000);
        });

        

        document.getElementById("ProductsLink").innerHTML = "Projects";

    }

    /**
     *
     * This function is used to add or edit the existing things in the Contact-List Page.
     */
    function DisplayContactListPage()
    {
        console.log("Contact List Page");

        if(localStorage.length > 0) // check if localStorage has soemthing in it
        {
            let contactList = document.getElementById("contactList");

            let data = "";

            let keys = Object.keys(localStorage);

            let index = 1;

            //for every key in the keys collection loop
            for(const key of keys)
            {
                let contactData = localStorage.getItem(key); // retrieve contact data from localstorage

                let contact = new Contact(); // creates an empty Contact object
                contact.deserialize(contactData);

                data += `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td></td>
                <td></td>
                </tr>
                `;

                index++;
            }

            contactList.innerHTML = data;
        }
        document.getElementById("ProductsLink").innerHTML = "Projects";

        
    }

    // named function
    function Start()
    {
        console.log("App Started!!");
        

        switch (document.title) 
        {
          case "Home":
            DisplayHomePage();
            break;
          case "Contact Us":
            DisplayContactPage();
            break;
          case "Contact-List":
            DisplayContactListPage();
            break;
          case "About Us":
            DisplayAboutPage();
            break;
          case "My Products":
            DisplayProductsPage();
            break;
          case "Our Services":
            DisplayServicesPage();
            break;
        }

        
    }
    window.addEventListener("load", Start);
})();