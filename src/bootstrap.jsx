import React from 'react'

function Bootstrap({main}) {
    return <>
        <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">{main.value}</h5>
                    <h6 class="card-price text-center">${main.price}<span class="period">/month</span></h6>
                    <ul class="fa-ul">
                        <li><span class="fa-li"><i class="fas fa-check"></i></span>{main.users}</li>
                        <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                            Private Projects</li>
                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                            Phone Support</li>
                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{main.subdomain}
                        </li>
                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                            Reports</li>
                    </ul>
                    <div class="d-grid">
                        <a href="#" class="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Bootstrap
