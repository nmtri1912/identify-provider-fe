import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import { useState } from "react";

const Authorize = () => {

    const submit = () => {
        console.log("submit");
    }

    const deny = () => {
        console.log("deny");
    }

    return (
        <div className="container">
            <div className="page-header">
                <h1>Authorize</h1>
            </div>

            <div className="form-group">
                <p>Would like to perform actions on your behalf.</p>
                <p>How long do you want to authorize for?</p>
                <div className="radio">
                    <label className="radio-inline">
                    <input type="radio" name="lifetime" value="3600"/> 1 hour
                    </label>
                    <label className="radio-inline">
                    <input type="radio" name="lifetime" value="86400"/> 1 day
                    </label>
                    <label className="radio-inline">
                    <input type="radio" name="lifetime" value="604800" checked/> 1 week
                    </label>
                </div>
            </div>

            <div className="row">
            <div className="col-md-3 col-sm-4 col-xs-6">
                <button className="btn btn-lg btn-block btn-primary" type="submit" onClick={submit}></button>
            </div>
            <div claclassNamess="col-md-3 col-sm-4 col-xs-6">
                <button className="btn btn-lg btn-block btn-primary" type="submit" onClick={deny}></button>
            </div>
            </div>
        </div>
    )
}

export default Authorize;
