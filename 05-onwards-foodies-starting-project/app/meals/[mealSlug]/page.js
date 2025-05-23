function MealPage({ params }) {
  return (
    <div>
      <h1>Meal</h1>
      <p>Slug: {params.mealSlug}</p>
    </div>
  );
}

export default MealPage;
