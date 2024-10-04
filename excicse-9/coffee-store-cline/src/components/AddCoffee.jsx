import Swal from 'sweetalert2'
const AddCoffee = () => {

    const handleAddCoffee = (even) =>{
        even.preventDefault();
        const form = even.target;
        const name = form.name.value;
        const quentity = form.quentity.value;
        const supplier = form.supplier.value;
        const teste = form.teste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quentity,supplier,teste, category, details, photo };

        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Added coffee successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
            form.reset();
            
        })

    }
  return (
    <div className="bg-slate-700 rounded p-24">
            <h2 className="text-5xl font-extrabold">Add Coffe</h2>

            <form onSubmit={handleAddCoffee}>
                {/* name quentity */}
                <div className="md:flex gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Coffe Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Qunatity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quentity" placeholder="Available Qunatity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* supply test */}
                <div className="md:flex gap-3">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="supplier" placeholder="Supplier name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="teste" placeholder="Teste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* category and details */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* photo uri */}
                <div className="md:flex gap-3">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" className="btn btn-block mt-5" value="Add Coffee" />
            </form>
        </div>
  )
}

export default AddCoffee;