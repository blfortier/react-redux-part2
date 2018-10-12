const initState = {
    posts: [
        {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis semper eros, ac consequat purus tempor a. Curabitur imperdiet condimentum nisi nec scelerisque. Nunc in tristique justo. Donec sed nibh iaculis, facilisis felis at, iaculis lorem. '},    
        {id: '2', title: 'Charmander Laid an Egg', body: 'Ut mattis quam elit. Nunc nec ante rhoncus, posuere neque ac, pretium tortor. Pellentesque sit amet metus semper, tempus purus id, tincidunt ante. Vivamus varius est nec iaculis lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'},   
        {id: '3', title: 'a Helix Fossil was Found', body: 'Cras accumsan mattis egestas. Integer et sodales orci, vitae cursus velit. Fusce tellus tortor, pharetra nec tincidunt vel, porttitor vel magna. Suspendisse non laoreet orci, sed porta arcu. Etiam laoreet nunc nec porta vehicula. Etiam lobortis, ligula ac blandit ornare, risus velit euismod lectus.'}   
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;