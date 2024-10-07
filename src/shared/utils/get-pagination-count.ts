export const getPaginationCount = (
  currentPage: number,
  totalPages: number,
  delta: number = 2
): (number | string)[] => {
  const pages: (number | string)[] = [];

  const range = (start: number, end: number) => {
    const output = [];
    for (let i = start; i <= end; i++) {
      output.push(i);
    }
    return output;
  };

  if (totalPages <= 1) {
    return [1]; // Если страниц всего 1 или меньше, выводим только одну
  }

  const left = Math.max(2, currentPage - delta); // Левая граница
  const right = Math.min(
    totalPages - 1,
    currentPage + delta
  ); // Правая граница

  pages.push(1); // Первая страница всегда отображается

  if (left > 2) {
    pages.push("..."); // Добавляем многоточие, если есть пропущенные страницы в начале
  }

  pages.push(...range(left, right)); // Добавляем страницы между левой и правой границами

  if (right < totalPages - 1) {
    pages.push("..."); // Добавляем многоточие, если есть пропущенные страницы в конце
  }

  pages.push(totalPages); // Последняя страница всегда отображается

  return pages;
};
