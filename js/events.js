const Events = {
  FILTERS_CHANGE: "filterschange",
};

const dispatch = (eventName, payload) => {
  document.dispatchEvent(
    new CustomEvent(eventName, {
      detail: payload,
    })
  );
};

const addFiltersListener = (cb) => {
  document.addEventListener(Events.FILTERS_CHANGE, (e) => cb(e.detail));
};

export { dispatch, addFiltersListener };
