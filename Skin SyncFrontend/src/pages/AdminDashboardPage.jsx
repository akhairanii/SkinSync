import React from "react";

export default function AdminDashboardPage() {

  const reviews =
    JSON.parse(localStorage.getItem("reviews")) || [];

  const journals =
    JSON.parse(localStorage.getItem("skinJournal")) || [];

  return (
    <div className="container">

      <h1>Admin Dashboard</h1>

      <p>
        Monitoring data SkinSync
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
          }}
        >
          <h2>Total Reviews</h2>
          <h3>{reviews.length}</h3>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
          }}
        >
          <h2>Total Journals</h2>
          <h3>{journals.length}</h3>
        </div>

      </div>

      <br />

      <h2>Latest Reviews</h2>

      {reviews.slice(0, 5).map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <strong>{item.product}</strong>

          <p>{item.rating}</p>

          <p>{item.review}</p>
        </div>
      ))}

    </div>
  );
}
