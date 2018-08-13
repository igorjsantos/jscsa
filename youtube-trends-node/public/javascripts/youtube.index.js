(function () {

  const prepareFilter = () => {
    const countrySelectFilter = document.querySelector('#country-select');

    countrySelectFilter.addEventListener('change', (event) => {
      const regionCode = event.target.selectedOptions[0].value;
      document.location.search = `?regionCode=${regionCode}`;
    }, false);
  };

  prepareFilter();
})();
