import React from "react";
import "./Filter.css";
const Filter = (props) => {
  return (
    <div className="filter">
      <div className="result">تعداد محصولات : {props.count} محصول</div>
      <div className="sort">
        <div className="sort-title">مرتب سازی بر اساس</div>
        <div className="form-checkbox">
          <div className="form-group">
            <input
              type="radio"
              value="asc"
              name="radioValuse"
              onChange={props.sortProducts}
            />
            <label>جدید ترین محصولات</label>
          </div>
          <div className="form-group">
            <input
              type="radio"
              value="desc"
              name="radioValuse"
              onChange={props.sortProducts}
            />
            <label>قدیمی ترین محصولات</label>
          </div>
        </div>
      </div>
      <div className="brand">
        برندها
        <select value={props.brand} onChange={props.filterProuducts}>
          <option value="">همه</option>
          <option value="apple">اپل</option>
          <option value="blackberry">بلک بری</option>
          <option value="Lg">ال جی</option>
          <option value="motorola">موتورولا</option>
          <option value="samsung">سامسونگ</option>
          <option value="sony">سونی</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
