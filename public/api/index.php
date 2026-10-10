<?php
// Future Care Global - PHP Backend API Handler for Hostinger Shared Hosting
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

// Helper to read initial data
function getData() {
    $dataFile = __DIR__ . '/../initial-data.json';
    if (file_exists($dataFile)) {
        $json = file_get_contents($dataFile);
        return json_decode($json, true) ?: [];
    }
    return ['jobs' => [], 'applications' => [], 'interviews' => [], 'submissions' => []];
}

$input = json_decode(file_get_contents('php://input'), true) ?: $_POST;

// 1. Admin Login
if (strpos($requestUri, 'admin/login') !== false && $method === 'POST') {
    $passcode = isset($input['passcode']) ? trim($input['passcode']) : '';
    $validPasscode = 'Alam@8055';

    if ($passcode === $validPasscode) {
        echo json_encode([
            'success' => true,
            'token' => 'admin_session_' . time(),
            'user' => 'Future Care Global Admin'
        ]);
    } else {
        http_response_code(401);
        echo json_encode([
            'success' => false,
            'error' => 'Incorrect password. Please enter the valid admin password.'
        ]);
    }
    exit;
}

// 2. Admin Analytics
if (strpos($requestUri, 'admin/analytics') !== false) {
    $data = getData();
    $jobs = $data['jobs'] ?? [];
    $apps = $data['applications'] ?? [];
    $ints = $data['interviews'] ?? [];
    $subs = $data['submissions'] ?? [];

    $activeJobs = count(array_filter($jobs, fn($j) => ($j['status'] ?? '') === 'published'));
    $shortlisted = count(array_filter($apps, fn($a) => ($a['status'] ?? '') === 'Shortlisted'));
    $selected = count(array_filter($apps, fn($a) => ($a['status'] ?? '') === 'Selected'));
    $pendingEmployer = count(array_filter($subs, fn($s) => ($s['status'] ?? '') === 'pending'));

    echo json_encode([
        'success' => true,
        'stats' => [
            'activeJobs' => $activeJobs,
            'totalApplications' => count($apps),
            'shortlistedCount' => $shortlisted,
            'interviewsCount' => count($ints),
            'placementsCount' => $selected,
            'pendingEmployerJobs' => $pendingEmployer
        ],
        'topJobsByViews' => array_slice($jobs, 0, 4),
        'topJobsByApplications' => array_slice($jobs, 0, 4)
    ]);
    exit;
}

// 3. Jobs Listing
if (strpos($requestUri, '/api/jobs') !== false || strpos($requestUri, 'api/jobs') !== false) {
    $data = getData();
    $jobs = $data['jobs'] ?? [];
    echo json_encode([
        'success' => true,
        'jobs' => $jobs,
        'count' => count($jobs)
    ]);
    exit;
}

// 4. Admin Applications
if (strpos($requestUri, 'admin/applications') !== false || strpos($requestUri, 'admin/resumes') !== false) {
    $data = getData();
    $apps = $data['applications'] ?? [];
    echo json_encode([
        'success' => true,
        'applications' => $apps,
        'candidates' => $apps
    ]);
    exit;
}

// 5. Admin Interviews
if (strpos($requestUri, 'admin/interviews') !== false) {
    $data = getData();
    echo json_encode([
        'success' => true,
        'interviews' => $data['interviews'] ?? []
    ]);
    exit;
}

// 6. Admin Employer Jobs
if (strpos($requestUri, 'admin/employer-jobs') !== false) {
    $data = getData();
    echo json_encode([
        'success' => true,
        'submissions' => $data['submissions'] ?? []
    ]);
    exit;
}

// Default fallback
echo json_encode([
    'success' => true,
    'message' => 'Future Care Global API active.'
]);
