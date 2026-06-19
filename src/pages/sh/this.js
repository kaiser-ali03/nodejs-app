        document.addEventListener('DOMContentLoaded', () => {
            const apiContent = document.getElementById('apiContent')
            const pageTitle = document.getElementById('page-title')
            const pageDescription = document.getElementById('page-description')
            
            /** fetch setup **/
            fetch('/sh/sh.json')
                .then(response => response.json())
                .then(data => {
                    pageTitle.textContent = data.name || 'API Documentation'
                    pageDescription.textContent = data.description || 'Explore and test the available APIs.'
                    apiContent.innerHTML = ''
                    data.categories.forEach(category => {
                        const categorySection = document.createElement('section')
                        categorySection.className = 'mb-5'
                        const categoryTitle = document.createElement('h2')
                        categoryTitle.className = 'section-title'
                        categoryTitle.textContent = category.name
                        categorySection.appendChild(categoryTitle)
                        const itemsRow = document.createElement('div')
                        itemsRow.className = 'row'
                        category.items.forEach(item => {
                            const itemCol = document.createElement('div')
                            itemCol.className = 'col-md-6 col-lg-4 mb-4'
                            itemCol.innerHTML = `
                                <div class="card h-100">
                                    <div class="card-body d-flex flex-column">
                                        <h5 class="card-title">${item.name}</h5>
                                        <p class="card-text text-muted flex-grow-1">${item.desc}</p>
                                        <p class="card-text">
                                            <small class="text-body-secondary">
                                                Status: 
                                                <span class="badge ${item.status === 'Ready' ? 'bg-success' : 'bg-danger'}">${item.status}</span>
                                            </small>
                                        </p>
                                        <button class="btn btn-outline-primary mt-auto try-api-btn" 
                                                data-bs-toggle="modal" 
                                                data-bs-target="#apiModal"
                                                data-path="${item.path}"
                                                data-name="${item.name}"
                                                data-params='${JSON.stringify(item.params)}'>
                                            <i class="fas fa-bolt"></i> Try API
                                        </button>
                                    </div>
                                </div>
                            `
                            itemsRow.appendChild(itemCol)
                        })
                        categorySection.appendChild(itemsRow)
                        apiContent.appendChild(categorySection)
                    });
                })
                .catch(error => {
                    apiContent.innerHTML = `<div class="alert alert-danger">Gagal memuat data API. Error: ${error.message}</div>`;
                });

            /** logika objek **/
            const apiModal = document.getElementById('apiModal');
            const modalTitle = document.getElementById('apiModalLabel');
            const inputContainer = document.getElementById('apiQueryInputContainer');
            const submitBtn = document.getElementById('submitQueryBtn');
            const responseContainer = document.getElementById('responseContainer');
            const responseContent = document.getElementById('apiResponseContent');
            const endpointCode = document.getElementById('apiEndpoint');
            const loadingSpinner = document.getElementById('apiResponseLoading');
            
            let currentPath = '';

            apiModal.addEventListener('show.bs.modal', event => {
                const button = event.relatedTarget;
                const name = button.dataset.name;
                currentPath = button.dataset.path;
                const params = JSON.parse(button.dataset.params);

                modalTitle.textContent = `Test: ${name}`;
                inputContainer.innerHTML = '';
                responseContainer.classList.add('d-none');
                loadingSpinner.classList.add('d-none');
                submitBtn.disabled = false;
                
                Object.keys(params).forEach(paramKey => {
                    const paramDescription = params[paramKey];
                    const formGroup = document.createElement('div');
                    formGroup.className = 'mb-3';
                    const label = document.createElement('label');
                    label.className = 'form-label';
                    label.textContent = `Parameter: ${paramKey}`;
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.className = 'form-control';
                    input.placeholder = paramDescription;
                    input.dataset.paramName = paramKey;
                    formGroup.appendChild(label);
                    formGroup.appendChild(input);
                    inputContainer.appendChild(formGroup);
                });
            });

            submitBtn.addEventListener('click', async () => {
                loadingSpinner.classList.remove('d-none');
                responseContainer.classList.add('d-none');

                const params = new URLSearchParams();
                const inputs = inputContainer.querySelectorAll('input');
                
                inputs.forEach(input => {
                    if (input.value) {
                        params.append(input.dataset.paramName, input.value);
                    }
                });

                const finalURL = `${currentPath}?${params.toString()}`;
                endpointCode.textContent = finalURL;

                try {
                    const response = await fetch(finalURL);
                    const contentType = response.headers.get('content-type');

                    if (contentType && contentType.includes('application/json')) {
                        const json = await response.json();
                        const formattedJson = JSON.stringify(json, null, 2)
                            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                            .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
                                let cls = 'json-number';
                                if (/^"/.test(match)) { cls = /:$/.test(match) ? 'json-key' : 'json-string'; }
                                else if (/true|false/.test(match)) { cls = 'json-boolean'; }
                                else if (/null/.test(match)) { cls = 'json-null'; }
                                return '<span class="' + cls + '">' + match + '</span>';
                            });
                        responseContent.innerHTML = `<pre>${formattedJson}</pre>`;
                    } else if (contentType && contentType.startsWith('image/')) {
                        const imageBlob = await response.blob();
                        const imageURL = URL.createObjectURL(imageBlob);
                        responseContent.innerHTML = `<img src="${imageURL}" alt="API Response">`;
                    } else {
                        const text = await response.text();
                        responseContent.innerHTML = `<pre>${text}</pre>`;
                    }
                } catch (error) {
                    responseContent.innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
                } finally {
                    loadingSpinner.classList.add('d-none');
                    responseContainer.classList.remove('d-none');
                }
            });
        });