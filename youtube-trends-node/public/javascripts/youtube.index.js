(function () {

  const prepareFilter = () => {
    const loader = document.querySelector('.loader');
    const videoList = document.querySelector('#youtube');
    const countrySelectFilter = document.querySelector('#country-select');

    countrySelectFilter.addEventListener('change', (event) => {
      const regionCode = event.target.selectedOptions[0].value;
      document.location.search = `?regionCode=${regionCode}`;
      videoList.classList.add('hidden');
      loader.classList.remove('hidden');
    }, false);
  };

  prepareFilter();
})();
