<template>
  <div
    class="flex flex-col gap-6 items-center h-screen w-full bg-gray-50 flex items-center justify-center"
  >
    <div class="w-3/2 bg-gray-200 overflow-hidden rounded-xl">
      <div class="flex">
        <div class="flex-none w-48 relative">
          <img
            src="http://lorempixel.com/500/500/sports/1/Dummy-Text/"
            alt=""
            class="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <form class="flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="text-blue font-bold flex-auto text-xl font-semibold">
              Classic Utility Jacket
            </h1>

            <div class="text-xl font-semibold text-gray-500">$326.00</div>
            <div
              class="w-full flex-none text-sm font-medium text-gray-500 mt-2"
            >
              In stock
            </div>
          </div>
          <p class="mt-4 text-sm text-gray-500">
            Free shipping on all continental US orders.
          </p>
          <div class="flex items-baseline mt-4 mb-6">
            <div class="space-x-2 flex">
              <label
                class="w-8 h-8 rounded shadow-sm text-center flex items-center justify-center bg-white"
              >
                <input
                  class="hidden focus-within:w-6 h-6 flex items-center justify-center bg-gray-100 rounded-lg"
                  name="size"
                  type="radio"
                  value="xs"
                  checked
                />
                XS
              </label>
              <label
                class="w-8 h-8 rounded shadow-sm text-center flex items-center justify-center bg-white"
              >
                <input
                  class="hidden focus-within:w-6 h-6 flex items-center justify-center bg-gray-100 rounded-lg"
                  name="size"
                  type="radio"
                  value="xs"
                  checked
                />
                S
              </label>
              <label
                class="w-8 h-8 rounded shadow-sm text-center flex items-center justify-center bg-white"
              >
                <input
                  class="hidden focus-within:w-6 h-6 flex items-center justify-center bg-gray-100 rounded-lg"
                  name="size"
                  type="radio"
                  value="xs"
                  checked
                />
                M
              </label>
              <label
                class="w-8 h-8 rounded shadow-sm text-center flex items-center justify-center bg-white"
              >
                <input
                  class="hidden focus-within:w-6 h-6 flex items-center justify-center bg-gray-100 rounded-lg"
                  name="size"
                  type="radio"
                  value="xs"
                  checked
                />
                L
              </label>
              <label
                class="w-8 h-8 rounded shadow-sm text-center flex items-center justify-center bg-white"
              >
                <input
                  class="hidden focus-within:w-6 h-6 flex items-center justify-center bg-gray-100 rounded-lg"
                  name="size"
                  type="radio"
                  value="xs"
                  checked
                />
                XL
              </label>
            </div>
            <div class="ml-auto text-xs text-gray-500 underline">Voir plus</div>
          </div>
          <div class="flex space-x-3 mb-4 text-sm font-medium">
            <div class="flex-auto flex space-x-3">
              <button
                class="uppercase text-xs font-bold w-1/2 flex items-center justify-center rounded-full bg-blue-400 text-white"
                type="submit"
              >
                Acheter
              </button>
              <button
                class="uppercase text-xs font-bold w-1/2 flex items-center justify-center rounded-full border border-gray-300"
                type="button"
              >
                Ajouter
              </button>
            </div>
            <button
              class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-red-300 hover:animate-ping"
              type="button"
              aria-label="like"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="fill-current text-red-300"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="max-w-screen-sm bg-purple-800 overflow-hidden rounded-xl">
      <div class="flex">
        <div class="flex-none w-48 relative">
          <img
            src="http://lorempixel.com/output/fashion-h-c-301-499-7.jpg"
            alt=""
            class="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <form class="flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="text-white font-bold flex-auto text-xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h1>

            <div
              class="w-full flex-none text-sm font-bold text-green-300 mt-2 text-xl"
            >
              300 000 <sup class="font-light text-xs">Ar</sup>
            </div>
          </div>
          <p class="mt-4 text-sm text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            aperiam architecto aspernatur eveniet in mollitia nisi nulla rerum
            vel. Expedita?
          </p>
          <div class="flex items-baseline mt-4 mb-6">
            <div class="space-x-2 flex">
              <label
                class="w-8 h-8 rounded-full shadow-sm bg-gradient-to-r from-purple-900 to-purple-700 shadow-md text-center-2 flex items-center justify-center bg-none bg-purple-700"
              >
                <svg
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="stroke-current text-purple-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                  />
                </svg>
              </label>
              <label
                class="w-8 h-8 rounded-full shadow-sm bg-gradient-to-r from-purple-900 to-purple-700 shadow-md text-center-2 flex items-center justify-center bg-none bg-purple-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  height="20"
                  width="20"
                  class="strocke-current text-purple-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </label>
              <label
                class="w-8 h-8 rounded-full shadow-sm bg-gradient-to-r from-purple-900 to-purple-700 shadow-md text-center-2 flex items-center justify-center bg-none bg-purple-700"
              >
                <svg
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="stroke-current text-purple-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                  />
                </svg>
              </label>
              <label
                class="w-8 h-8 rounded-full shadow-sm bg-gradient-to-r from-purple-900 to-purple-700 shadow-md text-center-2 flex items-center justify-center bg-none bg-purple-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  height="20"
                  width="20"
                  class="strocke-current text-purple-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </label>
            </div>
            <div class="ml-auto text-xs text-gray-500 underline">Voir plus</div>
          </div>
          <div class="flex space-x-3 mb-4 text-sm font-medium">
            <div class="flex-auto flex space-x-3">
              <button
                class="uppercase text-xs text-gray-800 font-bold w-1/2 flex items-center justify-center rounded-full bg-green-400 text-white"
                type="submit"
              >
                Acheter
              </button>
            </div>
            <button
              class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-red-300 hover:animate-ping"
              type="button"
              aria-label="like"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="fill-current text-red-300"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>