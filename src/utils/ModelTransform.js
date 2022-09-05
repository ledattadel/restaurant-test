export const mapToApiModel = (dish) => {
    let model = {...dish};
    delete model.store;
    model.picture = model.picture || null;
     setMultiSelectField(model,'allergy');
     setMultiSelectField(model, 'meat');
     return model;
};

export const mapToViewModel = (dish) => {
    let model = {...dish};
    if(Object.keys(dish).length > 0) {
        parseMenu(model);
        model.allergy = Array.isArray(dish.allergy) ? dish.allergy.map(a=>a.name || a) : [];
        model.meat = Array.isArray(dish.meat) ? dish.meat.map(a=>a.name || a) : [];
        model.size = Array.isArray(dish.size) ? dish.size.map(a=>a.name || a) : [];
    }
    return model;
};

const setMultiSelectField = (dish, field) => {
    if(!dish[field]) {
        dish[field] = [];
    } else {
        const idLookup = JSON.parse(sessionStorage.getItem(`${field}IdLookup`));
        dish[field] = dish[field].map(name=>idLookup[name]);
    }
}

const parseMenu = (dish) => {
    if(dish.menuId) {
        delete dish.menu;
    }
    if(dish.menu) {
        dish.menuId = dish.menu.id;
        delete dish.menu;
    }
}