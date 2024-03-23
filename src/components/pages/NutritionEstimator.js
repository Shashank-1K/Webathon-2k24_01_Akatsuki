import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./NutrientsEstimation.css"
import axios from 'axios'
function NutritionEstimator() {
    const [foodItems, setFoodItems] = useState()
    const [nutrients, setNutrients] = useState(undefined)
    const [image,setImage] = useState('https://upload.wikimedia.org/wikipedia/commons/3/3b/Food-and-restaurant.svg')
    async function getNutrientsDetails() {
        setNutrients(undefined)
        setImage("https://cdn.svgator.com/assets/landing-pages/static/css-loader/57579212-0-Loaders-2.svg")
        const items = foodItems.split("\n")
        let idx = items.indexOf("")
        if(idx > -1) items.splice(idx,1)
        idx = items.indexOf(" ")
        if(idx > -1) items.splice(idx,1)
        await axios({
            method: "post",
            url: `https://api.edamam.com/api/nutrition-details?app_id=99336641&app_key=52ae0947160bf13330957ef997a4f329`,
            data: {
                ingr: items
            }
        })
            .then((details) => setNutrients(details.data))
    }
    const getItems = (event) => {
        event.preventDefault()
        setFoodItems(event.target.value)
    }
    return (
        <div className='d-flex align-items-center bg-dark text-light'>
            <div className='border border-dark rounded-2 p-4 w-50 ms-3'>
                <h3>NUTRIENTS ESTIMATOR</h3>
                <label className='d-block'>What did you eat today ?</label>
                <textarea className='d-block mx-auto my-3 border rounded-3 text-dark' onChange={getItems}></textarea>
                <button onClick={getNutrientsDetails} className='btn btn-success d-block mx-auto'>Submit</button>
            </div>
            {nutrients !== undefined ? <section className="performance-facts mx-3" id="performance-facts">
                <div className='content'>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Qty</th>
                            <th>Unit</th>
                            <th>Food</th>
                            <th>Calories</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nutrients?.ingredients?.map((item) =>{
                            return(<tr key={item?.parsed[0]?.foodMatch}>
                                <td>{item?.parsed[0]?.quantity}</td>
                                <td>{item?.parsed[0]?.measure}</td>
                                <td>{item?.parsed[0]?.foodMatch}</td>
                                <td>{item?.parsed[0]?.nutrients?.ENERC_KCAL?.quantity} {nutrients?.ingredients?.parsed?.ENERC_KCAL?.unit}</td>
                                <td>{item?.parsed[0]?.weight}</td>
                            </tr>)
                        }
                        )}
                    </tbody>
                </table>
                <div className="performance-facts__header">
                    <h1 className="performance-facts__title">Nutrition Facts</h1>
                    <p><span id="lnumser">0</span> servings per container</p>
                </div>
                <table className="table table-bordered table-dark">
                    <thead>
                        <tr>
                            <th colSpan="3" className="amps">Amount Per Serving</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th colSpan="2" id="lkcal-val-cal"><b>Calories</b></th>
                            <td className="nob">{nutrients?.calories}</td>
                        </tr>
                        <tr className="thick-row">
                            <td colSpan="3" className="small-info"><b>% Daily Value*</b></td>
                        </tr>
                        <tr>
                            <th colSpan="2"><b>Total Fat </b>{nutrients?.totalNutrients?.FAT?.quantity?.toFixed(2)} {nutrients?.totalNutrients?.FAT?.unit}</th>
                            <td><b>{nutrients?.totalDaily?.FAT?.quantity?.toFixed(2)} {nutrients?.totalDaily?.FAT?.unit}</b></td>
                        </tr>
                        <tr>
                            <td className="blank-cell"></td>
                            <th>Saturated Fat {nutrients?.totalNutrients?.FASAT?.quantity?.toFixed(2)}</th>
                            <td><b>{nutrients?.totalDaily?.FASAT?.quantity?.toFixed(2)} {nutrients?.totalDaily?.FASAT?.unit}</b></td>
                        </tr>
                        <tr>
                            <td className="blank-cell"></td>
                            <th>Trans Fat {nutrients?.totalNutrients?.FATRN?.quantity?.toFixed(2)} {nutrients?.totalNutrients?.FATRN?.unit}</th>
                            <td>{nutrients?.totalDaily?.FATRN?.quantity?.toFixed(2)} {nutrients?.totalDaily?.FATRN?.unit}</td>
                        </tr>
                        <tr>
                            <th colSpan="2"><b>Cholesterol </b>{nutrients?.totalNutrients?.CHOLE?.quantity?.toFixed(2)} {nutrients?.totalNutrients?.CHOLE?.unit}</th>
                            <td>{nutrients?.totalDaily?.CHOLE?.quantity?.toFixed(2)} {nutrients?.totalDaily?.CHOLE?.unit}</td>
                        </tr>
                        <tr>
                            <th colSpan="2"><b>Sodium</b> {nutrients?.totalNutrients?.NA?.quantity?.toFixed(2)} {nutrients?.totalNutrients?.NA?.unit}</th>
                            <td>{nutrients?.totalDaily?.NA?.quantity?.toFixed(2)} {nutrients?.totalDaily?.NA?.unit}</td>
                        </tr>
                        <tr>
                            <th colSpan="2"><b>Total Carbohydrate</b> {nutrients?.totalNutrients?.CHOCDF?.quantity?.toFixed(2)} {nutrients?.totalNutrients?.CHOCDF?.unit}</th>
                            <td>{nutrients?.totalDaily?.CHOCDF?.quantity?.toFixed(2)} {nutrients?.totalDaily?.CHOCDF?.unit}</td>
                        </tr>
                        <tr>
                            <td className="blank-cell"></td>
                            <th>Dietary Fiber {nutrients?.totalNutrients?.FIBTG?.quantity?.toFixed(2)} {nutrients?.totalNutrients?.FIBTG?.unit}</th>
                            <td>{nutrients?.totalDaily?.FIBTG?.quantity?.toFixed(2)} {nutrients?.totalDaily?.FIBTG?.unit}</td>
                        </tr>
                        <tr>
                            <td className="blank-cell"></td>
                            <th>Total Sugars {nutrients?.totalNutrients?.SUGAR?.quantity?.toFixed(2)} {nutrients?.totalNutrients?.SUGAR?.unit}</th>
                            <td>{nutrients?.totalDaily?.SUGAR?.quantity?.toFixed(2)} {nutrients?.totalDaily?.SUGAR?.unit}</td>
                        </tr>
                        <tr>
                            <td className="blank-cell"></td>
                            <th>Includes - Added Sugars</th>
                            <td></td>
                        </tr>
                        <tr className="thick-end">
                            <th colSpan="2"><b>Protein</b> {nutrients?.totalNutrients?.PROCNT?.quantity?.toFixed(2)} {nutrients?.totalNutrients?.PROCNT?.unit}</th>
                            <td>{nutrients?.totalDaily?.PROCNT?.quantity?.toFixed(2)} {nutrients?.totalDaily?.PROCNT?.unit}</td>
                        </tr>
                    </tbody>
                </table>
                <p className="small-info" id="small-nutrition-info">*Percent Daily Values are based on a 2000 calorie diet</p>
                </div>
            </section > : <img src={image} alt='loading'></img>}
        </div >
    )
}
export default NutritionEstimator
