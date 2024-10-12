// const { Children } = require("./react");
// const h2 = React.createElement('h2', { className: 'heading', id: "subheading1" }, "Hello world!");
// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(h2)


//react element
/*  object{}   react element is just obejct AND YOU CAN RENDDER IT USING RENDER DIRECTLY PASSING THE object in the format  by h2 in console and foramt
 */


/*reactelem = {
    $$typeof: Symbol.for('react.element'),
    key: null,
    type:"h2",
    ref:null,
    props: {
        children: "Hello world!",
        className: "heading",
        id: "subheading1"
    },
}

multichild={
    $$typeof: Symbol.for('react.element'),
    key: null,
    type:"h2",
    ref:null,
    props: {
        children:[{
            $$typeof: Symbol.for('react.element'),
            key: null,
            type:"i",
            ref:null,
            props: {
                children: "Hello",
            },
        },
        {
            $$typeof: Symbol.for('react.element'),
            key: null,
            type:"button",
            ref:null,
            props: {
                children: "Hello suraj world!",
            },
        }
    ]
}
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(multichild)
*/


//using the old js method
// const h2=document.createElement('h2');
// h2.innerText="Welcome Mr.Suraj";
// root=document.querySelector('#root');
// root.append(h2)         //here you cant append the h2 created using react Elment because it rturn an object so use render method by reactDOM




//in the below section if you  dont pass arr athen no need of key if you want multiple children then use key fro sibling differentiation
const container = React.createElement(
    'div',
    { className: "container", id: "container" },
    [
        React.createElement('section', { key: 1 }, [
            React.createElement(
                'p',
                { key: 1 },
                "I will complete this tutorial and make good frontend"
            ),

            React.createElement('h2', { key: 2 }, "using nested componetn rendering"),
            React.createElement('img', { key: 3, src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.starrez.com%2Fcustomers%2Fboarding-school-housing-software-spotlight-img-academy&psig=AOvVaw0p2oS-U_kSDb3go5zU3L-V&ust=1728454755144000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiz-YSS_ogDFQAAAAAdAAAAABAE" })
        ]),


        React.createElement('br'),


        //new section
        React.createElement('section', { key: 2 }, [
            React.createElement(
                'p',
                { key: 1 },
                "doing second section"
            ),

            React.createElement('h2', { key: 2 }, "using nested componetn rendering"),
            React.createElement('h1', { key: 3, style: { color: 'red' } }, "second section"),
            React.createElement('img', { key: 4, src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.starrez.com%2Fcustomers%2Fboarding-school-housing-software-spotlight-img-academy&psig=AOvVaw0p2oS-U_kSDb3go5zU3L-V&ust=1728454755144000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiz-YSS_ogDFQAAAAAdAAAAABAE" })
        ]),

        //form 

        React.createElement('h1',{key:4},"Form design"),
        React.createElement('form', { key: 3 }, [
            React.createElement('div', { className:"username",key:1 }, [
                React.createElement('label', { key: 1, for: 'username' }, "username"),
                React.createElement('input', { key: 2, id: "username",placeholder:"enter your username" }),
            ]),
            React.createElement('div', { className:"password",key:2 }, [
                React.createElement('label', { key: 1, for: 'password' }, "password"),
                React.createElement('input', { key: 2, id: "password",type:'password',placeholder:"enter password"}),
            ])
        ])

    ]
)

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(container)