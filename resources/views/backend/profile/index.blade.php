@extends('layouts.backend')

@section('title', 'Profile')

@section('content')
    <main class="py-4">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card card-default">
                        <div class="card-header">Profile</div>

                        <div class="card-body">
                            @include('backend.components.notifications.success')
                            @include('backend.components.forms.profile')
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
@endsection
