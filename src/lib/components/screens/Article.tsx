const Article = () => {
  const date = new Date();
  const day = new Intl.DateTimeFormat('id-ID', { day: 'numeric' }).format(date);
  const month = new Intl.DateTimeFormat('id-ID', { month: 'long' }).format(
    date
  );
  const year = new Intl.DateTimeFormat('id-ID', { year: 'numeric' }).format(
    date
  );

  return (
    <div className="pb-6 border-b-8 wrapper border-gray-100 dark:border-black w-full">
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {`Assalamu'alaykum`}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-white">
            Ahlan wa Sahlan 👋🏼
          </p>
        </div>
        <article className="flex max-w-xl flex-col items-start justify-between">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime="2020-03-16">
              {month} {day}, {year}
            </time>
            <button
              type="button"
              className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              Marketing
            </button>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6">
              <button type="button">
                <span className="absolute inset-0" />
                Boost your conversion rate
              </button>
            </h3>
            <p className="mt-5 text-xs sm:text-sm line-clamp-3 leading-6">
              Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
              vitae illo. Non aliquid explicabo necessitatibus unde. Sed
              exercitationem placeat consectetur nulla deserunt vel. Iusto
              corrupti dicta.
            </p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <img
              src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              className="h-10 w-10 rounded-full bg-gray-50"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold">
                <button type="button">
                  <span className="absolute inset-0" />
                  Michael Foster
                </button>
              </p>
              <p>Co-Founder / CTO</p>
            </div>
          </div>
        </article>
        <article className="flex max-w-xl flex-col items-start justify-between">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime="2020-03-16">
              {month} {day}, {year}
            </time>
            <button
              type="button"
              className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              Marketing
            </button>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6">
              <button type="button">
                <span className="absolute inset-0" />
                Boost your conversion rate
              </button>
            </h3>
            <p className="mt-5 text-xs sm:text-sm line-clamp-3 leading-6">
              Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
              vitae illo. Non aliquid explicabo necessitatibus unde. Sed
              exercitationem placeat consectetur nulla deserunt vel. Iusto
              corrupti dicta.
            </p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <img
              src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              className="h-10 w-10 rounded-full bg-gray-50"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold">
                <button type="button">
                  <span className="absolute inset-0" />
                  Michael Foster
                </button>
              </p>
              <p>Co-Founder / CTO</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Article;
