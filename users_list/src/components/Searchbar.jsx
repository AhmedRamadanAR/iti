

export default function Searchbar(){
    return (
<>
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet"/>

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8 ml-8 ms-8">
            <form class="d-flex">
                <div class="input-group">
                    <input class="form-control form-control-lg" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-primary px-4" type="submit">
                            <i class="bi bi-search"></i>
                            search
                           
                        </button>
                </div>
            </form>
        </div>
    </div>
</div>
</>
    );
}